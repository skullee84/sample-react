import React from 'react';
import { Switch, Route } from 'react-router-dom';
import history from 'libs/history';

import Navbar from 'components/common/Navbar';
import Footer from 'components/common/Footer';
import Errorz from 'components/common/Errorz';

import Home    from 'components/home/Home';
import Recruit from 'components/recruit/Recruit';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/recruit" component={Recruit} />
          <Route component={Errorz}/>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
