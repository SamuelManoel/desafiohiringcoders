import React from 'react'
import {useCssHandles} from 'vtex.css-handles'
interface CountdownProps {}

const CSS_HANDLES = ['countdown','countdownChildren','countdownBox','image','countdownChildrenActive'] as const


const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {

  const handles = useCssHandles(CSS_HANDLES)
  return (
    <>
      <span className={handles.countdown}>
        <div className={handles.countdownBox}>
          <a href="!#" className={handles.countdownChildren}>
          <img src="https://i.imgur.com/PLED9yf.png" alt="" className={handles.image}/>
          <span>ENTRAR</span>
          </a>
          <a href="/" className={`${handles.countdownChildren} ${handles.countdownChildrenActive}`}>
          <img src="https://i.imgur.com/z7ycXIf.png" alt="" className={handles.image}/>
          <span>DESAFIOS</span>
          </a>
          <a href="!#" className={handles.countdownChildren}>
          <img src="https://i.imgur.com/ON7fKbk.png" alt="" className={handles.image}/>
          <span>LOJA</span>
          </a>
          <a href="https://api.whatsapp.com/send?l=pt-BR&phone=5511964335064&text=Para%20falar%20com%20a%20Gabi%F0%9F%91%B1%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%0A%0AClique%20enviar%F0%9F%91%89%0A%0A------------%0A*D%C3%BAvida%20sobre%3A*%20Etapa%20S%C3%A3o%20Jorge%20-%20Circuito%20Corinthians%0A*ID%3A*%2052292" className={handles.countdownChildren}>
          <img src="https://i.imgur.com/5jPchTt.png" alt="" className={handles.image}/>
          <span>SUPORTE</span>
          </a>
        </div>
      </span>
    </>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default Countdown
