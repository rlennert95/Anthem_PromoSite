import React from "react";
import { Card } from 'react-bootstrap'
import "./footer.css"

const FooterPage = () => {
  return (
    <Card.Footer className="footer">
    <div>
      Someone famous in <cite title="Source Title">Source Title</cite>
    </div>
  </Card.Footer>
  );
}

export default FooterPage;