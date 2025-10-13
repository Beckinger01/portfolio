import AboutText from "./About/AboutText"
import AboutTools from "./About/AboutTools"

const About = () => {
    return (
        <section id="about" className="w-full mx-auto text-center py-12 sm:py-16 lg:py-20 border-t-2 border-gradient">
            <AboutText />
            <AboutTools />
        </section>
    )
}

export default About