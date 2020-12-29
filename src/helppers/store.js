var store = {
  debug: true,
  state: {
    keyWords: [],
  },
  SetKeywordsAction(newValue) {
    if (this.debug) this.state.keyWords.push(newValue);
    console.log(this.state.keyWords);
  },
  DropKeywordsAction(dropvalue) {
    if (this.debug)
    this.state.keyWords.forEach((element, index) => {
      if (element.value === dropvalue) {
        this.state.keyWords.splice(index, 1);
      }
    });
    console.log(this.state.keyWords);
  },
  CleanFilterAction() {
    if (this.debug) {
      this.state.keyWords.splice(0, this.state.keyWords.length);
      console.log(this.state.keyWords);
    }
  },
};
module.exports = store;
