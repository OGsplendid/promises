import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json((response)))
      .then((data) => JSON.parse(data))
      .catch((err) => new Error(err));
  }
}
