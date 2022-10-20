import Head from "next/head";
import Image from "next/future/image";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import quote from "../public/quote.png";
import markdown from "../public/markdown.png";
import calculator from "../public/calculator.png";
import expenses from "../public/expenses.png";
import { useState } from "react";


export default function Home() {

    const [isChecked, setChecked] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleClick = () => {
        setChecked(!isChecked);
        console.log(isChecked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response Succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setBody('')
            }
        })
    }

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={darkMode ? "dark" : ""} >
        <section className="">
          <nav className="py-4 d-flex justify-content-between">
            <h1 className=""></h1>
            <ul className="flex align-items-center list-group list-group-horizontal">
              <li>
                <button className="btn m-auto p-auto">
                    {darkMode ? <BsSun className="pointer text-white" onClick={() => setDarkMode(!darkMode)}/>
                  :<BsFillMoonStarsFill className="pointer" onClick={() => setDarkMode(!darkMode)}/>
                }
                </button>
              </li>
              <li>
                <a
                  className="resume bg-primary text-white px-2 py-1 rounded-2 ms-3"
                  href={"/Chang_Lee_Resume.pdf"} download="Chang_Resume.pdf" target="_blank">
                  Résumé
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-3 mt-5 ">
            <h2 className="fs-1 py-2 text-primary">Chang Bok Lee</h2>
            <h3 className="fs-4 py-2">Entry level web developer</h3>
            <p className="fs-5 py-4">
              Aspiring entry level web developer looking for new opportunities
              to learn and grow.
            </p>
          </div>
          <div className="fs-1 d-flex justify-content-center gap-4 text-body">
            <a href="https://www.linkedin.com/in/changboklee88/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/ChangL88">
              <AiFillGithub />
            </a>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <h3 className="fs-4 text-center">Projects</h3>
            <p className="text-center">
              Below are preview of currently completed projects. Click on an
              image to view a live demo version.
            </p>
            <div className="d-flex flex-wrap">
              <div className="text-center hover_img mx-auto">
                <a href="https://random-quote-generator.changl88.repl.co/">
                  <Image src={quote} width={400} layout="responsive" alt="Screenshot of random quote generator project"/>
                </a>
              </div>
              <div className="text-center hover_img mx-auto">
                <a href="https://Markdown-previewer.changl88.repl.co">
                  <Image src={markdown} width={400} layout="responsive" alt="Screenshot of markdown previewer project"/>
                </a>
              </div>
              <div className="text-center hover_img mx-auto">
                <a href="https://changl88.github.io/Frontend_Mentor_projects/calculator-app-main/">
                  <Image src={calculator} width={400} layout="responsive" alt="Screenshot of calculator project"/>
                </a>
              </div>
              <div className="text-center hover_img mx-auto">
                <a href="https://changl88.github.io/Frontend_Mentor_projects/expenses-chart-component-main/">
                  <Image src={expenses} width={400} layout="responsive" alt="Screenshot of expenses chart component project"/>
                </a>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="text-center">Contact</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <p className="text-center">
                  If you have any comments, feedback, or constructive criticism,
                  please feel free to send me a message!
                </p>
                <p className="text-center">
                  Alternatively, you can send me an email at{" "}
                  <a href="mailto:chang.bok.lee88@gmail.com">
                    chang.bok.lee88@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <form
              className="form-group col-sm-8 mx-auto">
              <div className="row">
                <label className="col-sm-2 px-sm-0" htmlFor="name">
                  Name
                </label>
                <div className="col-sm-10">
                  <input id="name" type="text" name="name" required onChange={(e)=>{setName(e.target.value)}}/>
                </div>
              </div>
              <div className="row check-row">
                <label className="checkbox offset-md-2 col-md-8" htmlFor="response">
                  <input id="response" type="checkbox" onClick={handleClick}/>
                  May I respond to your message?
                </label>
              </div>
              {isChecked &&
                <div className="row">
                    <label className="col-sm-2 px-sm-0" htmlFor="email">
                    Email address
                    </label>
                    <div className="col-sm-10">
                    <input id="email" type="email" name="email" required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
              }
              <div className="row">
                <label className="col-sm-2 px-sm-0" name="message" htmlFor="message">
                  Your Message
                </label>
                <div className="col-sm-10">
                  <textarea
                    name="message"
                    id="message"
                    columns="50"
                    rows="10"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
