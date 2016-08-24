import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";


import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  npm: require("../assets/npm.png"),
  noders: require("../assets/noders.png"),
  fforres: require("../assets/fforres.jpg"),
  groupon: require("../assets/groupon.png"),
  nodejs: require("../assets/nodejs-logo.png"),
  jscl: require("../assets/jscl.png"),
  nodeschool: require("../assets/stgo.svg"),
  gdg: require("../assets/gdg.png"),
  shame: require("../assets/sh.gif"),
  fry: require("../assets/fry.gif"),
  suck: require("../assets/suck.gif"),
  awesome: require("../assets/awesome.jpg"),
  godaddy: require("../assets/gd_logo.png"),
  uber: require("../assets/uber.png"),
  linkedin: require("../assets/linkedin.png"),
  wallmart: require("../assets/wallmart.png"),
  microsoft: require("../assets/microsoft.png"),
  paypal: require("../assets/paypal.png"),
  what: require("../assets/what.gif"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  base: "#6919FF",
  secondary: "#cc1301",
  tertiary: "teal",
  groupon: "#53a318",
  grouponDark: "#50a010",
  js: "#f0db4f",
  dark: "#282828",
  clear: "white"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress={'bar'} transition={["spin"]} transitionDuration={700}>

          <Slide transition={["slide"]} bgColor="dark">
            <Image src={images.noders.replace("/", "")} width="100%"/>
            <Heading size={1} fit lineHeight={1} textColor="clear">
              ¿Por qué? Porque nos gusta.
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Layout>
              <Appear fid="1">
                <Fill>
                  <Image src={images.fforres.replace("/", "")} margin="0px auto" width="90%" />
                </Fill>
              </Appear>
              <Appear fid="2">
                <Fill>
                  <CodePane
                    lang="js"
                    source={require("raw!../assets/fforres.example")}
                    margin="0 auto"
                    style={{fontSize: "1em"}}
                  />
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="groupon">
            <Image src={images.groupon.replace("/", "")} margin="0px auto" width="100%"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              I <span style={{color: "white"}}>❤</span> TEACH
            </Heading>
            <Appear fid="1">
              <Text size={1} lineHeight={1} textColor="black" textSize="6em">
                & oss
              </Text>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="dark" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Image src={images.noders.replace("/", "")} margin="0px auto" padding="0.3em" width="50%"/>
            <Image src={images.jscl.replace("/", "")} margin="0px auto" padding="0.3em" width="20%"/>
            <Image src={images.nodejs.replace("/", "")} margin="0px auto" padding="0.3em" width="23%"/>
            <Image src={images.nodeschool.replace("/", "")} margin="0px auto" padding="0.3em" width="23%"/>
            <Image src={images.gdg.replace("/", "")} margin="0px auto" padding="0.3em" width="23%"/>
          </Slide>

          <Slide transition={["slide"]} bgColor="dark">
            <Heading size={1} fit caps lineHeight={1} textColor="clear">
              PHP Sucks NodeJS Rocks
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps lineHeight={1} textColor="clear">
                Booooo
              </Heading>
            </Appear>
            <Appear fid="1">
              <Text textColor="groupon">by @fforres</Text>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.fry.replace("/", "")} />


          <Slide transition={["zoom", "fade"]} bgColor="tertiary">
            <Heading size={1} caps lineHeight={1} textColor="clear">
              Women Who
            </Heading>
            <Heading size={1} caps lineHeight={1} textColor="clear">
              Node
            </Heading>
          </Slide>



          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Heading size={1} fit lineHeight={1} textColor="clear" margin={"0.5em 0em"}>
              ¿Qué NO es NodeJS?
            </Heading>
            <Appear><Text lineHeight={2} textSize="1.6em" textColor="groupon">Una librería</Text></Appear>
            <Appear><Text lineHeight={2} textSize="1.6em" textColor="groupon">Un Lenguaje</Text></Appear>
            <Appear><Text lineHeight={2} textSize="1.6em" textColor="groupon">Un framework</Text></Appear>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Heading size={1} lineHeight={1} textColor="clear" margin={"0.5em 0em"}>
              Es
            </Heading>
            <Appear>
              <Text lineHeight={2} fontSize={"1.2em"} textColor="groupon">Plataforma JS</Text>
            </Appear>
            <Appear>
              <Text lineHeight={2} fontSize={"1.2em"} textColor="groupon">Chromium V8</Text>
            </Appear>
            <Appear>
            <Text lineHeight={2} fontSize={"1.2em"} textColor="groupon">Awesome</Text>
            </Appear>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.awesome.replace("/", "")} bgDarken={0.25}/>

          <Slide transition={["zoom", "zoom"]} bgColor="dark">
            <Heading size={1} lineHeight={1} textColor="clear">
              ¿Alguien lo usa?
            </Heading>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="clear">
            <Image src={images.godaddy.replace("/", "")} margin="0px auto" padding="0.3em" width="36%"/>
            <Image src={images.uber.replace("/", "")} margin="0px auto" padding="0.3em" width="36%"/>
            <Image src={images.groupon.replace("/", "")} margin="0px auto" padding="0.3em" width="36%"/>
            <Image src={images.linkedin.replace("/", "")} margin="0px auto" padding="0.3em" width="36%"/>
            <Image src={images.wallmart.replace("/", "")} margin="0px auto" padding="0.3em" width="36%"/>
            <Image src={images.microsoft.replace("/", "")} margin="0px auto" padding="0.3em" width="36%"/>
            <Image src={images.paypal.replace("/", "")} margin="0px auto" padding="0.3em" width="36%"/>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="js">
            <Heading size={1} lineHeight={1} textColor="dark">
              JS
            </Heading>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="js">
            <Text lineHeight={1.5} textSize="2em" textColor="dark">Lenguaje Asíncrono</Text>
            <Text lineHeight={1.5} textSize="2em" textColor="dark">Debilmente Tipado</Text>
            <Text lineHeight={1.5} textSize="2em" textColor="dark">No Bloqueante</Text>
            <Text lineHeight={1.5} textSize="2em" textColor="dark">Concurrente</Text>
            <Text lineHeight={1.5} textSize="2em" textColor="dark">MonoHilo</Text>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Image src={images.what.replace("/", "")} margin="0px auto" padding="0.3em"/>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Text lineHeight={1.5} textSize="1.6em" textColor="clear"> Bloqueante</Text>
            <Text lineHeight={1.5} textSize="3em" textColor="clear"> V/S </Text>
            <Text lineHeight={1.5} textSize="1.6em" textColor="clear">No Bloqueante</Text>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <CodePane
              lang="js"
              source={require("raw!../assets/blocking2.example")}
              margin="20px auto"
              textSize="1.6em"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <CodePane
              lang="js"
              source={require("raw!../assets/blocking3.example")}
              margin="20px auto"
              textSize="1.6em"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="grouponDark">
            <Heading lineHeight={1} textColor="clear"> Callbacks </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="dark"
            notes="<ul><li>Jquery</li><li>Meetup</li></ul>"
          >
            <CodePane
              lang="js"
              source={require("raw!../assets/nonblocking.example")}
              margin="20px auto"
              textSize="1em"
            />
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Image src={images.nodejs.replace("/", "")} margin="0px auto" padding="0.3em"/>
            <Text lineHeight={1} textSize="2em" textColor="clear"> nodejs.org </Text>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Text lineHeight={2} textSize="3em" textColor="clear"> node </Text>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Text lineHeight={2} textSize="3em" textColor="clear"> index.js </Text>
            <Text lineHeight={2} textSize="3em" textColor="clear"> console.log('hola mundo') </Text>
            <Text lineHeight={2} textSize="3em" textColor="clear"> node index.js </Text>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="clear">
            <Image src={images.npm.replace("/", "")} margin="0px auto" padding="0.3em" width="70%"/>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="tertiary">
            <Text lineHeight={2} textSize="3em" textColor="clear"> npm -v </Text>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Text lineHeight={2} textSize="3em" textColor="clear"> npm install -g learnyounode </Text>
            <Text lineHeight={2} textSize="3em" textColor="clear"> npm install -g javascripting </Text>
          </Slide>

          <Slide transition={["fade", "fade"]} bgColor="teal" />


          <Slide transition={["zoom", "fade"]} bgColor="teal"
            notes="<ul>
              <li>Ryan Dahl</li>
              <li>Nginx como inspiracion</li>
              <li>Escalabilidad</li>
              <li>COmunidad</li>
              <li>NodeSchool</li>
            </ul>"
          >
            <Text lineHeight={1.2} textSize="1.2em" margin={"1em 0em"} textColor="clear">
              Philip Roberts - What the heck is the event loop anyway?
              <br/>
              https://www.youtube.com/watch?v=8aGhZQkoFbQ
            </Text>


            <Text lineHeight={1.2} textSize="1.2em" margin={"1em 0em"} textColor="clear">
              Douglas Crockford - Javascript The good parts
              <br/>
              http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf
            </Text>


            <Text lineHeight={1.2} textSize="1.2em" margin={"1em 0em"} textColor="clear">
              Kyle Simpsons (@Getify) - https://github.com/getify/You-Dont-Know-JS
              <br/>
              https://www.youtube.com/watch?v=2pL28CcEijU
            </Text>


            <Text lineHeight={1.2} textSize="1.2em" margin={"1em 0em"} textColor="clear">
              NodeJS Original Presentation - Ryan Dahl
              <br/>
              https://www.youtube.com/watch?v=ztspvPYybIY
              <br/>
              http://s3.amazonaws.com/four.livejournal/20091117/jsconf.pdf
            </Text>


          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Appear>
              <Text lineHeight={2} textSize="3em" textColor="clear"> No saber... está bién.</Text>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Image width="100%" src={images.suck.replace("/", "")}/>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="dark">
            <Appear fid="1">
              <Text lineHeight={1.5} textSize="2em" textColor="clear"> With love by </Text>
            </Appear>
            <Appear fid="1">
              <Link href="http://www.noders.com">
                <Image width="100%" src={images.noders.replace("/", "")}/>
              </Link>
            </Appear>
            <Appear fid="1">
              <Text lineHeight={2} textSize="1.5em" textColor="clear"> Noders.com | @fforres </Text>
            </Appear>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
