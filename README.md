# **Bootcamp**

## **Repozitář pro praktickou část Technical Bootcamp I**

1. Vytvořte si na GITHUBu novou repozitory

   - Jděte na stránku [Github](https://www.github.com).
   - Klikněte na "New" repositories.
   - Nějak vhodně repozitář pojmenujte a popiště.

2. Naclonujte si ho k sobě pomocí Gitbash

   - Otevřete si VS Code.
   - Přesuňte se do složky, kam budete chtít repozitář nainstalovat.
   - Zkopírujte si URL repozitáře.
   - Naklonujte si repozitář do VSCode pomocí příkazu: git clone [URL]

3. Ve větvi master nahrajte nějaký defaultní obsah, např. soubory RF testů nebo vytvořené stránky z vedlejšího cvičení. At tam je třeba Txt soubor, html, css, nebo robot soubory.

   - Vytvořte nové soubory nebo do složky zkopírujte nové soubory.
   - Soubory přidejte do větve pomocí příkazu: git add [název souboru] (nebo vše: git add .)
   - Nahrajte soubory: git commit -m["Nějaká zpráva, co bude dávat smysl"]
   - git push

4. vytvořte novou větev (Názvy větví volte vhodně, stejně tak commit message.),

   - Zkontroluji, že jsem v hlavní větvi: git branch
   - Vytvořit větev: git branch [nazev_nove_vetve]
   - Přepnout se do větve: git status[nazev_nove_vetve]
   - provedu změny - přidám soubor, smažu soubor, změním něco v obsahu,...
   - Opět nahraji na GITHUB
     - git add .
     - git commit -m["Co jsem změnil nebo jiná zpráva."]
     - git push

5. v ní proveďte nějaké změny a při mergování zpět nasimulujte merge conflict a ten vyřešte.

   - provedu nějakou změnu v této větvi na GITHUBu
   - ve stejném místě provedu změnu i ve VSCode
   - git add .
   - git commit -m[]
   - git push
     objeví se chybová hláška, musím situaci vyřešit
   - git pull
   - porovnám změny a vyberu, co chci zachovat
   - opakuji body c)-e)
   - pull request
   - marge

6. Opakujte bod 5, ale místo mergování jen vytvořte pull request, poznamenejte si jeho link.

7. Smažte větev z bodu 6, lokálně ale i na serveru

8. Zkuste si do nové větve dostat jeden nově vytvořený commit v masteru (který v té větvi ještě není), pomocí git cherry-pick

   - postup jako předtím, vytvořím větev, push, změním se do main, něco zde změním, push
   - přepnu do nové větve
   - git cherry-pick ..main

9. v rootu repozitory si vytvořte readme.md soubor a naplňte ho nějakým vlastním obsahem. Zkuste dle nápovědy všechny možnosti formátování.

10. Nechceme do repozitory pustit JPG a PNG obrázky - přidejte do gitignore

11. Nastavte si u nějakého commitu jeden TAG

~~12. (volitelně, není nutné) Zkuste .gitconfig nastavit tak, aby soubory s příponou .txt bral jako binární. Pak zkuste udělat v txt souboru změnu a podívejte se, jak jí GIT uvidí. (co pak takový merge změn v TXT souboru? :-) )~~

13. Váš TL zjistí, kdo z kolegů bude úkol vyhodnocovat. Tomu pak umožněte přístup do repozitory pro kontrolu. Je to součástí vypracování úkolu. - v našem případě Tomáš Hák

14. Hotovo! ![emoji](https://th.bing.com/th/id/OIP.aYOT6qcALLGQZGrYM40XTQHaHY?pid=ImgDet&rs=1)

---

## **Formátování**

- nadpisy
- odrážky
- URL
- přeškrtnutý text
- obrázek
- barvičky

<style>
h2 {
  background-color: rgba(0, 0, 255, 0.3);
;
}

body {
 color: green;
}

div {
  box-shadow: 0px 0px 15px currentcolor;
  border: 5px solid currentcolor;
}
