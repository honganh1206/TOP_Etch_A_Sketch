let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/TOP_Etch_A_Sketch
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess=aoO
badd +37 ./grid.js
badd +12 ~/TOP_Etch_A_Sketch/style.css
argglobal
%argdel
edit ./grid.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 63 + 95) / 190)
exe 'vert 2resize ' . ((&columns * 63 + 95) / 190)
exe 'vert 3resize ' . ((&columns * 62 + 95) / 190)
argglobal
enew
balt ./grid.js
setlocal fdm=manual
setlocal fde=
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
wincmd w
argglobal
balt ~/TOP_Etch_A_Sketch/style.css
setlocal fdm=manual
setlocal fde=
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 37 - ((1 * winheight(0) + 1) / 3)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 37
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("~/TOP_Etch_A_Sketch/style.css", ":p")) | buffer ~/TOP_Etch_A_Sketch/style.css | else | edit ~/TOP_Etch_A_Sketch/style.css | endif
if &buftype ==# 'terminal'
  silent file ~/TOP_Etch_A_Sketch/style.css
endif
balt ./grid.js
setlocal fdm=manual
setlocal fde=
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 12 - ((1 * winheight(0) + 1) / 3)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 12
normal! 025|
wincmd w
exe 'vert 1resize ' . ((&columns * 63 + 95) / 190)
exe 'vert 2resize ' . ((&columns * 63 + 95) / 190)
exe 'vert 3resize ' . ((&columns * 62 + 95) / 190)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
