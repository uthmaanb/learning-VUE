// vue syntax doesn't need semi-colons

const app = Vue.createApp({
  // data, functions

  data() {
    return {
      url: "https://www.youtube.com/watch?v=IcNWN_uO2nE&ab_channel=BlessedSeal",
      showBooks: true,
      books: [
        {
          title: "Name of the wind",
          author: "Patrick Rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "The way of kings",
          author: "Brandon Sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "The Final Empire",
          author: "Tashwill Andries",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
    };
  },

  methods: {
    toggleShowBooks(title) {
      this.showBooks = !this.showBooks;
    },
    toggleIsfav(book) {
      book.isFav = !book.isFav;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
