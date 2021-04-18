const locale = 'en'

const data = {
  en: {
    'toolbar-undo': 'Undo',
    'toolbar-redo': 'Redo',
    'toolbar-zoomin': 'Zoom in',
    'toolbar-zoomout': 'Zoom out',
    'toolbar-boxselect': 'Select',
    'toolbar-copy': 'Copy',
    'toolbar-paste': 'Paste',
    'toolbar-delete': 'Delete',
    'toolbar-leveldown': 'Move Down',
    'toolbar-levelup': 'Move Up',
    'toolbar-line-straight': 'Line',
    'toolbar-line-taxi': 'Elbow connector',
    'toolbar-line-bezier': 'Curved connector',
    'toolbar-gridon': 'Show grid',
    'toolbar-fit': 'Snap to grid',
    'toolbar-save': 'Save',
    'element-text': 'Text',
    'elements-title': 'Element',
    'elements-label': 'Label',
    'elements-wrap': 'Size',
    'elements-background-color': 'Background',
    'elements-text-color': 'Text color',
    'elements-color': 'Color',
    'elements-image': 'Image',
    'window-navigator': 'Navigator',
    'node-types-thing': 'Thing',
    'node-types-skill': 'Skill',
    'node-types-knowledge': 'Knowledge'
  }
}

function localize (key) {
  if (key in data[locale]) {
    return data[locale][key]
  } else {
    return ('Unknown: ' + key)
  }
}

export default localize
