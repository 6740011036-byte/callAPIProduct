import Image from "next/image";
const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <Image src="https://images.unsplash.com/photo-1629077007578-a36bb1056b3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="myPerfumeuse" width={500 } height={500}></Image>
        </div>
    )
}
export default AboutPage;