import _ from 'lodash';
import React, {useMemo} from 'react';
import {css} from 'emotion';
import {connect} from 'react-redux';
import {Row} from 'reactstrap';

export const GamePlayersController = ({remotePlayers, playersCount, addPlayer, remPlayer}) => {
  const totalNumberOfPlayers = useMemo(() => playersCount + _.size(remotePlayers), [playersCount, remotePlayers]);

  return (
    <Row className={styles.container}></Row>
  );
};

const styles = {
  container: css({
    marginTop: 20,
  }),
};

const mapStateToProps = (state) => ({
  playersCount: state.config.players.length,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayersController);
