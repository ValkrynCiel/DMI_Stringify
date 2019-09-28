/** function to generate pseudo-unique IDs */

export default function getId() {
  return Date.now() + Math.random();
}
