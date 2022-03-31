// Generic Component that has properties can change depending of implementation
interface MyComponent<TProps> {
  name: string;
  id: number;
  props: TProps;
}

// First property that has a string
interface Props1 {
  color: string;
}

// Second property that has a number
interface Props2 {
  size: number;
}

// First component that has color in property because it is generic with Props
const component1: MyComponent<Props1> = {
  name: "My Component One",
  id: 1,
  props: { color: 'red' }
}

// Second component that has size in property because it is generic with Props2
const component2: MyComponent<Props2> = {
  name: "My Component Two",
  id: 2,
  props: { size: 100 }
}

console.log(component1);
console.log(component2);
