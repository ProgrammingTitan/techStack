import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Nav from './../Navigation';
import BottomNav from './../BottomNav';

class ChanceToAd extends React.Component {

    render(){
        return(
        <div>
            <Nav />
<Jumbotron>
        <h1 className="display-3">Welcome Possible Sponsors!</h1>
        <p className="lead">Here at Tech_Stack, we try to inform our users about the best possible products on the market. If you would like us to advertise your product, feel free to contact us!</p>
        <hr className="my-2" />
        <p>All inquiries can be handled through our Instagram</p>
        <p className="lead">
          <Button color="primary" href="https://www.instagram.com/tech_stack/">Tech_Stack</Button>
        </p>
      </Jumbotron>
      <BottomNav />
        </div>);
    }

}

export default ChanceToAd;