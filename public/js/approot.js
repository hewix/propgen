var app = new Vue({
  el: '#app',
  data: {
    base: {
      title: "",
      genTextA: "",
      genTextB: "",
      genTextC: "",
      imgRoute: "",
      imgName: ""
    },
    quote: {},
    gap: {
      title: "Ide jön majd a beírós generáló tartalom"
    },
    settings: {
      initial: true,
      reveal: false,
      gap: false,
      articleReady: false,
      reset: false,
      quoted: false
    },

    title: "MIRŐL SZÓLJON A CIKK?",
    buttonCap: ["FENYEGETIK...", "A KORMÁNY...", "SOROS...", "AZ ELLENZÉK..."],
    resetCaps: ["TÖRLÉS", "NAGYON JÓ, SZERETNÉK CSINÁLNI EGY ÚJAT"],
    resetCap: "TÖRLÉS",
    resetActive: false
  },
  methods: {
    updateOptMain: function (n) {
      this.precedence.push(n);
      this.obj = getPrec(this.precedence);
      if (this.precedence.length == 3) {
        this.base = getArt(this.precedence);
      }
      if (this.precedence.length == 4) {
        this.settings = getSettings();
        this.resetCap = this.resetCaps[1];
        this.resetActive = true;
        switch (n) {
          case 1:
          case 2:
          case 3:
            this.settings.quoted = true;
            this.quote = getQuote(this.precedence[this.precedence.length - 1]);
            break;
          case 4:
            break;
        }
      }

      else {
        this.buttonCap = this.obj.buttons;
        this.title = this.obj.title;
      }

      // for testing 

      console.log(this.precedence + this.base.imgName);
    },
    reset: function () {
      this.precedence = [];
      this.title = "MIRŐL SZÓLJON A CIKK?";
      this.buttonCap = ["FENYEGETIK...", "A KORMÁNY...", "SOROS...", "AZ ELLENZÉK..."];
      this.resetCap = this.resetCaps[0];
      this.settings = resetSettings(1);
      this.base.genTextA = "";
      this.base.genTextB = "";
      this.base.genTextC = "";
      this.base.imgName = "";
      this.quote.text = "";
      this.quote.imgRoute = "";
    },
    lazySelection: function () {
      this.base = getArt(randomArr());
      this.settings = getSettings();
      var chance = Math.floor(Math.random() * 2) + 1;
      console.log(chance);
      if (chance == 2) {
        this.settings.quoted = true;
        this.quote = getQuote(Math.floor(Math.random() * 3) + 1);
        console.log(this.quote.text);
      }
      this.resetCap = this.resetCaps[1];
      this.resetActive = true;
    },
    normalSelection: function () {
      this.settings = resetSettings(2);
    }
  }
});

app.precedence = [];
app.obj = {};