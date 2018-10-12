new Vue({
  el: '#app',
  data: {
    items: [
      {
        id: 1,
        action: 'Like',
        text: 'samanthaming',
        icon: 'instagram',
        active: false,
      },
      {
        id: 2,
        action: 'Like',
        text: 'samantha_ming',
        icon: 'twitter',
        active: false,
      },
      {
        id: 3,
        action: 'Like',
        text: 'hi.samanthaming',
        icon: 'facebook',
        active: false,
      },
      {
        id: 4,
        action: 'Like',
        text: 'samanthaming',
        icon: 'medium',
        active: false,
      },
      {
        id: 5,
        action: 'Bookmark',
        text: 'SamanthaMing.com',
        icon: 'globe',
        active: false,
      }
    ]
  },
  methods: {
    onCheck(item) {
      item.active = !item.active
    },
    uncheckAll() {
      this.items.forEach(item => {
        item.active = false;
      });
    }
  }
})
