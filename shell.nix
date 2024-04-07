{pkgs ? import <nixpkgs> {}}: let
  inherit (pkgs) mkShell cobalt;
in
  mkShell {
    packages = [
      cobalt
    ];
  }
