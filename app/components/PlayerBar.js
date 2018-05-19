import React, { Component } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import PlayArrow from 'react-icons/lib/md/play-arrow';
import Pause from 'react-icons/lib/md/pause';
import Stop from 'react-icons/lib/md/stop';
import SkipNext from 'react-icons/lib/md/skip-next';
import SkipPrevious from 'react-icons/lib/md/skip-previous';

import Button from './Button';

const Bar = styled.div`
  padding: 1rem;
  flex: 1;
  background-color: ${p => p.theme.color.dark};
  border: 1px solid ${p => p.theme.color.white};

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  font-size: 2rem;
`;

class PlayerBar extends Component {
  render() {
    return (
      <Bar>
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
      </Bar>
    );
  }
}

export default PlayerBar;
