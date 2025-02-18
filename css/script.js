gsap.to("header", {
  // y: -1,
  backgroundColor: "#fff",
  duration: 0.5,
  boxShadow: "",
  boxShadow: "0px -20px 20px 9px black",
  // height:120,
  scrollTrigger: {
    trigger: "header",
    scroller: "body",
    // marker:true,
    start: "top -10%",
    end: "top 0%",
    scrub: 1,
  },
});
