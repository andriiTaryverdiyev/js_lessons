function increaser(a, index) {
  if (a > index) {
    console.log(a * index);
    return a * index;
  }
  
  return a;
}
increaser(5, 10);
