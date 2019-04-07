import React from "react";
import { Card } from 'react-bootstrap'
import "./footer.css"

const FooterPage = () => {
  return (
    <Card.Footer className="footer">
    <div>
       <cite title="Source Title">© 2019 Electronic Arts Inc.</cite>
    </div>
  </Card.Footer>
  );
}

export default FooterPage;