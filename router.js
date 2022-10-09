import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './components/JoynHome'
import News from './components/JoynNews'
import Contact from './components/JoynContact'
import Mission from './components/JoynMission'
// import Health from './components/JoynHealth'
import Life from './components/JoynLife'
import Training from './components/JoynTraining'
import Career from './components/JoynCareer'
import Team from './components/JoynTeam'
import Consult from './components/JoynConsult'
import Services from './components/JoynServices'
import Projects from './components/JoynProjects'
import Certifications from './components/JoynCertification'
import Digital from './components/JoynDigital'
import Policy from './components/JoynPolicy'
import Products from './components/JoynProducts'
// import Background from './components/JoynBackground'
const router = createRouter({

    history: createWebHashHistory(),

    routes: [

        { path: '/home', component: Home },
        { path: '/news', component: News },
        { path: '/contact', component: Contact },
        { path: '/mission', component: Mission },
        // { path: '/health', component: Health },
        { path: '/life', component: Life },
        { path: '/training', component: Training },
        { path: '/career', component: Career },
        { path: '/team', component: Team },
        { path: '/consult', name: 'Consult', component: Consult },
        { path: '/services', name: 'Services', component: Services },
        { path: '/projects', component: Projects },
        { path: '/certification', component: Certifications, },
        { path: '/digital', name: 'Digital', component: Digital },
        { path: '/policy', component: Policy },
        { path: '/', component: Home },
        { path: '/products', component: Products },
        // { path: '/background', component: Background },


    ]


})

export default router;