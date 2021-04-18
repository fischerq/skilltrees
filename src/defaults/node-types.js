/**
 * Created by DemonRay on 2019/3/24.
 */

import roundRectangle from '../assets/node-svgs/round-rectangle.svg'
import ellipse from '../assets/node-svgs/ellipse.svg'
import hexagon from '../assets/node-svgs/hexagon.svg'
import utils from '../utils'

const defaultNodeTypes = [
  {
    type: 'thing',
    src: ellipse,
    bg: '#2B4162',
    resize: true,
    width: 76,
    height: 76,
    category: utils.localize('node-types-thing'),
    image: '',
    buildIn: true
  },
  {
    type: 'skill',
    src: roundRectangle,
    bg: '#721817',
    resize: true,
    width: 76,
    height: 76,
    category: utils.localize('node-types-skill'),
    image: '',
    buildIn: true
  },
  {
    type: 'knowledge',
    src: hexagon,
    bg: '#0B6E4F',
    resize: true,
    width: 76,
    height: 76,
    category: utils.localize('node-types-knowledge'),
    image: '',
    buildIn: true
  }
]
const defaultNodeStyles = [{
  'selector': 'node[type]',
  'style': {
    'shape': 'data(type)',
    'label': 'data(type)',
    'height': 'data(height)',
    'width': 'data(width)',
    'text-valign': 'center',
    'text-halign': 'center'
  }
}, {
  'selector': 'node[points]',
  'style': {
    'shape-polygon-points': 'data(points)',
    'label': 'polygon\n(custom points)',
    'text-wrap': 'wrap'
  }
}, {
  'selector': 'node[name]',
  'style': {
    'content': 'data(name)'
  }
}, {
  'selector': 'node[image]',
  'style': {
    'background-opacity': 0,
    'background-fit': 'cover',
    'background-image': (e) => { return e.data('image') || { value: '' } }
  }
}, {
  'selector': 'node[bg]',
  'style': {
    'background-opacity': 0.45,
    'background-color': 'data(bg)',
    'border-width': 1,
    'border-opacity': 0.8,
    'border-color': 'data(bg)'
  }
}, {
  selector: 'node:active',
  style: {
    'overlay-color': '#0169D9',
    'overlay-padding': 12,
    'overlay-opacity': 0.25
  }
}, {
  selector: 'node:selected',
  style: {
    'overlay-color': '#0169D9',
    'overlay-padding': 12,
    'overlay-opacity': 0.25
  }
}]

export {
  defaultNodeTypes,
  defaultNodeStyles
}
