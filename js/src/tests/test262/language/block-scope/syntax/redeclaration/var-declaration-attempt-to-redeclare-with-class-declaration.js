// |reftest| error:SyntaxError
// This file was procedurally generated from the following sources:
// - src/declarations/redeclare-with-class-declaration.case
// - src/declarations/redeclare/block-attempt-to-redeclare-var-declaration.template
/*---
description: redeclaration with ClassDeclaration (VariableDeclaration in BlockStatement)
esid: sec-block-static-semantics-early-errors
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Block : { StatementList }

    It is a Syntax Error if any element of the LexicallyDeclaredNames of
    StatementList also occurs in the VarDeclaredNames of StatementList.

---*/


throw "Test262: This statement should not be evaluated.";

{ var f; class f {}; }
