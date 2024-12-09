import InitScrollSmooth from './module/scrollsuave.js'
import InitanimationScroll from './module/animation.scroll.js'
import Accordion from './module/accordion-list.js'
import TabNav from './module/navegaocaotab.js'
import Modal from './module/modal.js'
import Tooltip from './module/tooltip.js'
import initDropdownMenu  from './module/dropdown-menu.js'
import initMenuMoblie from './module/menu-moblie.js'
import initFuncionamento from './module/funcionamento.js'
import initFetchAnimais from './module/fetch.animais.js'

// import {testando , testando123} from './module/teste.js'
// testando()
// testando123()

const accordion = new Accordion("[data-anime-accordion] dt")
accordion.init()


const tabNav = new TabNav("[data-tab] li" ,  "[data-tab] section")
tabNav.init()

const modal = new Modal ('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="modal-container"]')
modal.init()



const tooltip = new Tooltip ("[data-tooltip]")
tooltip.init()


InitScrollSmooth()
InitanimationScroll()
initDropdownMenu()
initMenuMoblie()
initFuncionamento()
initFetchAnimais()