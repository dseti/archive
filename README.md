# DSETI
## The Dream Search for ExtraTerrestrial Intelligence

This repository contains an Obsidian Vault (/content) and Quartz files to publish the DSETI Corpus through https://dseti.org.



robocopy . "..\text-only-vault" *.md /S /XD "DSETI Knowledge Base"


Get-ChildItem -Path "..\text-only-vault" -Filter "*.md" -Recurse | ForEach-Object {
    $header = "`n`n--- DOCUMENT START: $($_.FullName.Replace('C:\dseti-archive\text-only-vault\', '')) ---`n"
    $header | Out-File -FilePath "..\grounding_source.md" -Append -Encoding utf8
    Get-Content $_.FullName | Out-File -FilePath "..\grounding_source.md" -Append -Encoding utf8
}





```
Copyright (c) 2026 Daniel Rekshan

CC BY-NC-SA 4.0

Attribution-NonCommercial-ShareAlike 4.0 International

This license requires that reusers give credit to the creator. It allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, for noncommercial purposes only. If others modify or adapt the material, they must license the modified material under identical terms.

The D-SETI Corpus (the D-SETI writings by Daniel Rekshan published through https://dseti.org) is licensed under Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
```