export interface HanspellResult {
  token: string;
  suggestions: string[];
}

export interface HanspellDaumResult extends HanspellResult {
  type: string;
  context: string;
}

export interface HanspellPnuResult extends HanspellResult {
  info: string;
}

class Hanspell {
  spellCheckByDAUM(sentence: string, timeout: number, resolve: (result: HanspellDaumResult) => void, end: () => void, reject: (error: unknown) => void): void;
  spellCheckByPNU(sentence: string, timeout: number, resolve: (result: HanspellPnuResult) => void, end: () => void, reject: (error: unknown) => void): void;
}

export = Hanspell;
