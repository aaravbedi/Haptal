/**
 * Dataset Browser UI
 *
 * Renders the taxonomy tree in the right sidebar.
 * Shows data collection counts per category.
 * Allows selecting objects for simulation.
 */

import { TAXONOMY } from '../data/taxonomy.js';

export class DatasetBrowser {
  constructor(container, datasetManager) {
    this.container = container;
    this.dataset = datasetManager;
    this.onObjectSelected = null;
    this.selectedPath = null;

    this._build();
  }

  _build() {
    this.container.innerHTML = '';
    const tree = document.createElement('div');
    tree.className = 'taxonomy-tree';

    for (const [key, category] of Object.entries(TAXONOMY)) {
      tree.appendChild(this._renderNode(category, [key], 0));
    }

    this.container.appendChild(tree);
  }

  _renderNode(node, path, depth) {
    if (node.physics) {
      // Leaf node (object)
      return this._renderLeaf(node, path);
    }

    // Branch node
    const wrapper = document.createElement('div');
    wrapper.className = 'taxonomy-node';

    const pathStr = path.join('.');
    const count = this.dataset.getCountForPath(pathStr);

    const header = document.createElement('div');
    header.className = 'taxonomy-header';

    const expandIcon = document.createElement('span');
    expandIcon.className = 'expand-icon';
    expandIcon.textContent = '▸';

    const icon = document.createElement('span');
    icon.className = 'node-icon';
    icon.textContent = node.icon || '📁';

    const name = document.createElement('span');
    name.className = 'node-name';
    name.textContent = node.name;

    const countBadge = document.createElement('span');
    countBadge.className = 'node-count';
    countBadge.textContent = count > 0 ? count : '';
    countBadge.dataset.path = pathStr;

    header.appendChild(expandIcon);
    header.appendChild(icon);
    header.appendChild(name);
    header.appendChild(countBadge);

    const children = document.createElement('div');
    children.className = 'taxonomy-children';

    const childEntries = node.children ? Object.entries(node.children) : [];
    for (const [childKey, child] of childEntries) {
      children.appendChild(this._renderNode(child, [...path, childKey], depth + 1));
    }

    // Auto-expand first level
    if (depth === 0) {
      children.classList.add('open');
      expandIcon.classList.add('expanded');
    }

    header.addEventListener('click', () => {
      children.classList.toggle('open');
      expandIcon.classList.toggle('expanded');
    });

    wrapper.appendChild(header);
    wrapper.appendChild(children);
    return wrapper;
  }

  _renderLeaf(node, path) {
    const pathStr = path.join('.');
    const leaf = document.createElement('div');
    leaf.className = 'taxonomy-leaf';
    leaf.dataset.path = pathStr;

    const dot = document.createElement('span');
    dot.className = 'leaf-dot';

    const icon = document.createElement('span');
    icon.textContent = node.icon || '•';
    icon.style.fontSize = '14px';
    icon.style.width = '20px';
    icon.style.textAlign = 'center';

    const name = document.createElement('span');
    name.textContent = node.name;
    name.style.flex = '1';

    const props = document.createElement('span');
    props.className = 'leaf-props';
    props.textContent = `${(node.physics.mass * 1000).toFixed(0)}g`;

    leaf.appendChild(dot);
    leaf.appendChild(icon);
    leaf.appendChild(name);
    leaf.appendChild(props);

    leaf.addEventListener('click', () => {
      // Deselect previous
      this.container.querySelectorAll('.taxonomy-leaf.selected')
        .forEach(el => el.classList.remove('selected'));
      leaf.classList.add('selected');
      this.selectedPath = pathStr;

      if (this.onObjectSelected) {
        this.onObjectSelected(pathStr);
      }
    });

    return leaf;
  }

  /**
   * Refresh all count badges
   */
  refresh() {
    const badges = this.container.querySelectorAll('.node-count');
    for (const badge of badges) {
      const path = badge.dataset.path;
      if (path) {
        const count = this.dataset.getCountForPath(path);
        badge.textContent = count > 0 ? count : '';
      }
    }
  }
}
