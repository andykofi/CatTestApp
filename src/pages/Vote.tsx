import React from 'react';
import Wrapper from "../components/Wrapper";
import { Row, Col } from 'reactstrap';
import VoteController from "./VoteController";

const Vote = () => {
    return (
        <Wrapper>
            <h1>Voting</h1>
            <Row>
                <Col sm={12} >
                    <VoteController />
                </Col>
            </Row>
        </Wrapper>
    );
};

export default Vote;
