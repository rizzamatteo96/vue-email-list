//TODO Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
const app = new Vue({
  el : '#app',
  data : {
    arrayMail : []
  },
  mounted() {

    for(let i = 0; i < 10; i++){
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(element => {
          console.log(element.data.response);
          this.arrayMail.push(element.data.response);
          console.log(this.arrayMail);
        })
    }

  },
});


//TODO Bonus Far comparire gli indirizzi email solamente quando sono stati tutti generati.