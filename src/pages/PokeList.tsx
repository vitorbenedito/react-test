import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const PokeList: React.FC = () => {
  const [results, setData] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .catch((err) => {
          setData([]);
          setError(true);
        });

      setData(response.data.results);
      setError(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Poke list</h2>
      <Row>
        <Col>Name</Col>
        <Col>URL</Col>
      </Row>
      {results.map((item) => (
        <Row>
          <Col>{item["name"]}</Col>
          <Col>{item["url"]}</Col>
        </Row>
      ))}

      {isError && <p>Error to find data</p>}
    </div>
  );
};

export default PokeList;
