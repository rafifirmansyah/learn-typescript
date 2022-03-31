function genericInferred<T>(param: T) {}

// Implicit
genericInferred(1);
genericInferred(true);
genericInferred({custom: true});