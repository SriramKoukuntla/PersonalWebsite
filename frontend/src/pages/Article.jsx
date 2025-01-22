import { Home } from './Home/Home'
import { Experience } from './Experience/Experience'
import { Projects } from './Projects/Projects'
import { Skill } from '../components/Skill/Skill'
import { Skills } from './Skills/Skills'
{/* <Skills/> */}

export const Article = () => {
    return (
        <div>
            <Home/>
            <Experience/>
            <Projects/>
            <Skills />
        </div>
    )
}