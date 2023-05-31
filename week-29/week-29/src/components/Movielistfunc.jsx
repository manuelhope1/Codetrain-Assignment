import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MoviecardFun from "./MoviecardFun";

const Movielistfunc = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=fOAONgN1SwQT0oAaXQ2lKiuygJXPMfq8"
      );
      const newdata = await res.data.results;
      console.log(newdata);
      setData(newdata);
    } catch (err) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Row>
        <h1 className="toppp">Using Functional Component</h1>
        {data.map((info, index) => {
          return <MoviecardFun info={info} key={index} />;
        })}
      </Row>
    </Container>
  );
};

export default Movielistfunc;
