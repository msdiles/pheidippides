module.exports = {
  async redirects() {
    return [
      {
        source: "/main",
        destination: "/main/home",
        permanent: true,
      },
    ]
  },
}
