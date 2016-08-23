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
  noders: require("../assets/noders.png"),
  fforres: require("../assets/fforres.jpg"),
  groupon: require("../assets/groupon.png"),
  nodejs: require("../assets/nodejs-logo.png"),
  jscl: require("../assets/jscl.png"),
  nodeschool: require("../assets/stgo.svg"),
  gdg: require("../assets/gdg.png"),
  shame: require("../assets/sh.gif"),
  fry: require("../assets/fry.gif"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  base: "#6919FF",
  secondary: "#cc1301",
  tertiary: "teal",
  groupon: "#53a318",
  dark: "black",
  clear: "white"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress={'bar'} transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]} bgColor="dark">
            <Image src={images.noders.replace("/", "")} width="100%"/>
            <Heading size={1} fit lineHeight={1}>
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
              Ruby? Python? PHP?!?
            </Heading>
            <Appear fid="1">
              <Image src={images.shame.replace("/", "")} margin="0px auto" padding="0.3em" width="100%"/>
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


          <Slide transition={["zoom", "fade"]} bgColor="base">
            <Heading size={1} fit lineHeight={1} textColor="clear">
              ¿Qué NO es NodeJS?
            </Heading>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="base">
            <Heading size={1} fit lineHeight={1} textColor="clear">
              ¿Que es JavaScript?
            </Heading>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="base">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>


          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="base">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="base">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>


          <Slide transition={["zoom", "fade"]} bgColor="base">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>


          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>


          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="base">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
              `}
            </Markdown>
          </Slide>


          <Slide transition={["slide", "spin"]} bgColor="base">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>


          <Slide transition={["fade"]} bgColor="secondary" textColor="base">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>


          <Slide transition={["slide"]} bgColor="base">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>


          <Slide transition={["slide"]} bgColor="base"
            notes="Hard to find cities without any pizza"
          >
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Pizza Toppings
            </Heading>
            <Layout>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeaderItem/>
                    <TableHeaderItem>2011</TableHeaderItem>
                    <TableHeaderItem>2013</TableHeaderItem>
                    <TableHeaderItem>2015</TableHeaderItem>
                  </TableRow>
                </thead>
                <tbody>
                  <TableRow>
                    <TableItem>None</TableItem>
                    <TableItem>61.8%</TableItem>
                    <TableItem>39.6%</TableItem>
                    <TableItem>35.0%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Pineapple</TableItem>
                    <TableItem>28.3%</TableItem>
                    <TableItem>54.5%</TableItem>
                    <TableItem>61.5%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Pepperoni</TableItem>
                    <TableItem/>
                    <TableItem>50.2%</TableItem>
                    <TableItem>77.2%</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>Olives</TableItem>
                    <TableItem/>
                    <TableItem>24.9%</TableItem>
                    <TableItem>55.9%</TableItem>
                  </TableRow>
                </tbody>
              </Table>
            </Layout>
          </Slide>


          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="base">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
