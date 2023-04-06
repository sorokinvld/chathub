import { Link } from '@tanstack/react-router'
import feedbackIcon from '~/assets/icons/feedback.svg'
import settingIcon from '~/assets/icons/setting.svg'
import logo from '~/assets/logo.svg'
import NavLink from './NavLink'
import CommandBar from '../CommandBar'

function IconButton(props: { icon: string }) {
  return (
    <div className="p-[6px] rounded-[10px] cursor-pointer hover:opacity-80 bg-secondary dark:bg-transparent bg-opacity-20">
      <img src={props.icon} className="w-6 h-6" />
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="flex flex-col pr-5">
      <img src={logo} className="w-[79px] mb-[55px] mt-[66px] ml-5" />
      <div className="flex flex-col gap-3">
        <NavLink to="/" text="All-In-One" />
        <NavLink to="/chat/$botId" params={{ botId: 'chatgpt' }} text="ChatGPT" />
        <NavLink to="/chat/$botId" params={{ botId: 'bing' }} text="Bing" />
        <NavLink to="/chat/$botId" params={{ botId: 'bard' }} text="Bard" />
      </div>
      <div className="mt-auto">
        <hr className="border-[#ffffff4d]" />
        <div className="flex flex-row mt-5 gap-[10px] mb-6">
          <a href="https://prtl.cc" target="_blank" rel="noreferrer" title="Feedback">
            <IconButton icon={feedbackIcon} />
          </a>
          <Link to="/setting">
            <IconButton icon={settingIcon} />
          </Link>
        </div>
      </div>
      <CommandBar />
    </aside>
  )
}

export default Sidebar
