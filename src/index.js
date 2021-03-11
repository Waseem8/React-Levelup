import react from 'react';
import ReactDOM from 'react-dom';
import Skills from './components/skills'
import logo from './images/lavelupLogo.jpg'
//adding comment just for seening on the git 

const App = () => {
    return <div>
        <img src={logo} />
        <Skills skillsname="File Upload Test" actions="/upload"/>
        <Skills skillsname="For Skill 1" actions="https://pickleball-levelup.herokuapp.com/upload/skill1"/>
        <Skills skillsname="For Skill 2" actions="/upload/skill2"/>
        <Skills skillsname="For Skill 3" actions="/upload/skill3"/>
        </div>
}

ReactDOM.render(<App />, document.querySelector('#root'));