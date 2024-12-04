import { decode, encode } from 'base-64';
import {bridgeScriptBase64}  from './scripts/bridge'
import {epubScriptBase64}  from './scripts/epub'
import {babelScriptBase64}  from './scripts/babel'


const decodedBridgeScript = decode(bridgeScriptBase64);
const decodedEpubScript= decode(epubScriptBase64);
const decodedBabelScript = decode(babelScriptBase64);

export const renditionEmbeddedScripts = `
  <script>${decodedBridgeScript}</script>
  <script>${decodedEpubScript}</script>
  <script>${decodedBabelScript}</script>
`;
