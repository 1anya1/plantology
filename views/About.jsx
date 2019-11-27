const React = require('react');

class About extends React.Component {
  render() {
    return (
        <div>
               <head>
            <meta charSet="utf-8"/>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/normalize.css"></link>
          
            <link rel="stylesheet" href="/app.css"></link>
        </head>
            <nav class="navigation">
                <a href='/blogs'>Home Page</a>
                <a href="/blogs/new">Add New Blog </a>
                <a href='/blogs/about'>About Us</a>
                
            </nav>
            <h1>About Us</h1>
            <div class="aboutUs">
              <img class='homepage' src='https://img.sunset02.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/1483569001/grouped-big-leaf-houseplants-sun-0217.jpg'></img>
              <h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
                  elit. Aenean commodo ligula eget dolor. Aenean massa 
                  . Cum sociis natoque penatibus 
                  et magnis dis parturient montes, nascetur ridiculus 
                  mus. Donec quam felis, ultricies nec, pellentesque 
                  eu, pretium quis, sem. Nulla consequat massa quis 
                  enim. Donec pede justo, fringilla vel, aliquet nec, 
                  vulputate eget, arcu. In enim justo, rhoncus ut, 
                  imperdiet a, venenatis vitae, justo. Nullam dictum 
                  felis eu pede <a class="external ext" href="#">link</a> 
                  mollis pretium. Integer tincidunt. Cras dapibus. 
                  Vivamus elementum semper nisi. Aenean vulputate 
                  eleifend tellus. Aenean leo ligula, porttitor eu, 
                  consequat vitae, eleifend ac, enim. Aliquam lorem ante, 
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus 
                  viverra nulla ut metus varius laoreet. Quisque rutrum. 
                  Aenean imperdiet. Etiam ultricies nisi vel augue. 
                  Curabitur ullamcorper ultricies nisi.</p>
                  <h1>Lorem ipsum dolor sit amet consectetuer adipiscing 
                  elit</h1>
                  <h2>Aenean commodo ligula eget dolor aenean massa</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
                  elit. Aenean commodo ligula eget dolor. Aenean massa. 
                  Cum sociis natoque penatibus et magnis dis parturient 
                  montes, nascetur ridiculus mus. Donec quam felis, 
                  ultricies nec, pellentesque eu, pretium quis, sem.</p>
                  <h2>Aenean commodo ligula eget dolor aenean massa</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
                  elit. Aenean commodo ligula eget dolor. Aenean massa. 
                  Cum sociis natoque penatibus et magnis dis parturient 
                  montes, nascetur ridiculus mus. Donec quam felis, 
                  ultricies nec, pellentesque eu, pretium quis, sem.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing 
                  elit. Aenean commodo ligula eget dolor. Aenean massa. 
                  Cum sociis natoque penatibus et magnis dis parturient 
                  montes, nascetur ridiculus mus. Donec quam felis, 
                  ultricies nec, pellentesque eu, pretium quis, sem.</p>

            </div>
        </div>
    );
  }
}

module.exports = About;