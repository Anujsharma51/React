const states = [];

const myUseState = (initial, update = false, id) => {
  if (update) return [states[id].data, states[id].setState];

  const state = {
    data: initial,
    setState(value) {
      let type = "value";
      if (value instanceof Function) {
        type = "callback";
      }
      this.batches.push({
        type,
        value,
      });
    },
    batches: [],
  };

  states.push(state);

  return [state.data, state.setState.bind(state)];
};

class MyReact {
  render(component) {
    component();
    this.batchedUpdate();
  }
  batchedUpdate() {
    for (let state of states) {
      for (let update of state.batches) {
        if (update.type === "callback") {
          state.data = update.value(state.data);
        } else state.data = update.value;
      }
    }
    console.log(states[0].data);
  }
}

export { myUseState, MyReact };
