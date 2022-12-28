interface Steps {
  title: string;
  url: string;
}

const steps: Steps[] = [
  { title: "your info", url: "/" },
  { title: "select plan", url: "/plans" },
  { title: "add-ons", url: "/add-ons" },
  { title: "fishing up", url: "/fishing-up" },
];

export default steps;
