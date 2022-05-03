const solution = (n, r) => {
  let _n, _r, _nr, _rr, _nrnr;

  const DFS = (level) => {
    if (level === 1) {
      return 1;
    } else {
      return level * DFS(level - 1);
    }
  };

  _n = DFS(n - 1);
  _r = DFS(r - 1);
  _nr = DFS(n - 1 - (r - 1));
  _rr = DFS(r);
  _nrnr = DFS(n - 1 - r);

  return _n / (_nr * _r) + _n / (_nrnr * _rr);
};
