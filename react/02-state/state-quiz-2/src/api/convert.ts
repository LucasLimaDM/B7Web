type convert = {
  opt: {[key: number]: string},
  con: (option: number)=> string,
}

export const convert: convert = {
  opt: {
      0: '-',
      1: 'a',
      2: 'b',
      3: 'c',
      4: 'd',
      5: 'e'
  },

  con(option: number){
    
    return this.opt[option];
  }



}