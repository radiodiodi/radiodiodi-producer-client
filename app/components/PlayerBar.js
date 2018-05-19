import React, { Component } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import PlayArrow from 'react-icons/lib/md/play-arrow';
import Pause from 'react-icons/lib/md/pause';
import Stop from 'react-icons/lib/md/stop';
import SkipNext from 'react-icons/lib/md/skip-next';
import SkipPrevious from 'react-icons/lib/md/skip-previous';
import { Row, Column } from './Grid';
import Button from './Button';

const Bar = styled.div`
  padding: 1rem;
  flex: 1;
  background-color: ${p => p.theme.color.dark};
  border: 1px solid ${p => p.theme.color.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  font-size: 2rem;
`;

const Text = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;

  max-width: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BoldText = styled.strong`
  margin-right: 0.5em;
`;

const nowPlaying = 'Darude - Sandstorm (Radio Edit)';
const nextUp = 'Advertisement';

class PlayerBar extends Component {
  render() {
    return (
      <Bar>
        <Text data-tip data-for="now-playing">
          <BoldText>Now playing: </BoldText>
          { nowPlaying }
        </Text>
        <ReactTooltip id="now-playing" place="top" type="light" effect="solid">
          { nowPlaying }
        </ReactTooltip>
        <Text data-tip data-for="next-up">
          <BoldText>Next up: </BoldText>
          { nextUp }
        </Text>
        <ReactTooltip id="next-up" place="top" type="light" effect="solid">
          { nextUp }
        </ReactTooltip>
        <Row>
          <Button data-tip data-for="previous-button">
            <SkipPrevious />
          </Button>
          <ReactTooltip id="previous-button" place="top" type="light" effect="solid">
            Play previous
          </ReactTooltip>
          <Button data-tip data-for="stop-button">
            <Stop />
          </Button>
          <ReactTooltip id="stop-button" place="top" type="light" effect="solid">
            Stop playing and move to start of song
          </ReactTooltip>
          <Button data-tip data-for="play-button">
            <PlayArrow />
          </Button>
          <ReactTooltip id="play-button" place="top" type="light" effect="solid">
            Play or continue
          </ReactTooltip>
          <Button data-tip data-for="pause-button">
            <Pause />
          </Button>
          <ReactTooltip id="pause-button" place="top" type="light" effect="solid">
            Pause
          </ReactTooltip>
          <Button data-tip data-for="next-button">
            <SkipNext />
          </Button>
          <ReactTooltip id="next-button" place="top" type="light" effect="solid">
            Play next
          </ReactTooltip>
        </Row>

        <Text>Remaining: 03:35</Text>
      </Bar>
    );
  }
}

export default PlayerBar;
