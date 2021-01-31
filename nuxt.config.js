export default {
  target:'static',
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'hanoot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel:"preconnect", href:"https://fonts.gstatic.com"},
      {href:"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap", rel:"stylesheet"},
      {href:"https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap", rel:"stylesheet"},
      {href:"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap", rel:"stylesheet"},
      {href:"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600;700;800&display:swap", rel:"stylesheet"},
      {href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap", rel:"stylesheet"}
      //{ rel:"stylesheet" ,href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" ,integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" ,crossorigin:"anonymous"}
    ],
    script:[
      {src:"https://use.fontawesome.com/f4e7411ff2.js"},

    ]
  },

 /* body:{script:[
    {src:"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"},
    {src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" ,integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" ,crossorigin:"anonymous"},
    {src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" ,integrity:"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" ,crossorigin:"anonymous"}
  ],
  },*/
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '~/assets/style.css',
  ],
  js:[

  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/popper.client.js',
    '~/plugins/bootstrap.client.js',

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [

  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
