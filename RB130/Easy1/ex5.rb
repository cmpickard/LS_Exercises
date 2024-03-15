# The following list contains the names of individuals who are pioneers in the
#  field of computing or that have had a significant influence on the field. 
#  The names are in an encrypted form, though, using a simple 
#  (and incredibly weak) form of encryption called Rot13.

# Nqn Ybirynpr
# Tenpr Ubccre
# Nqryr Tbyqfgvar
# Nyna Ghevat
# Puneyrf Onoontr
# Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv
# Wbua Ngnanfbss
# Ybvf Unvog
# Pynhqr Funaaba
# Fgrir Wbof
# Ovyy Tngrf
# Gvz Orearef-Yrr
# Fgrir Jbmavnx
# Xbaenq Mhfr
# Fve Nagbal Ubner
# Zneiva Zvafxl
# Lhxvuveb Zngfhzbgb
# Unllvz Fybavzfxv
# Tregehqr Oynapu
# Write a program that deciphers and prints each of these names .

def rot_decrypt(str)
  str.chars.map(&:ord).map do |ord|
    case ord
    when (65..77), (97..109) then (ord + 13).chr
    when (78..90), (110..122) then (ord - 13).chr
    else
      ord.chr
    end
  end.join()
end

p rot_decrypt('Nqn Ybirynpr')
p rot_decrypt('Tenpr Ubccre')
p rot_decrypt('Nqryr Tbyqfgvar')
p rot_decrypt('Nyna Ghevat')
p rot_decrypt('Puneyrf Onoontr')
p rot_decrypt('Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv')
p rot_decrypt('Wbua Ngnanfbss')
p rot_decrypt('Ybvf Unvog')
p rot_decrypt('Pynhqr Funaaba')
p rot_decrypt('Fgrir Wbof')
p rot_decrypt('Ovyy Tngrf')
p rot_decrypt('Gvz Orearef-Yrr')
p rot_decrypt('Fgrir Jbmavnx')
p rot_decrypt('Xbaenq Mhfr')
p rot_decrypt('Fve Nagbal Ubner')
p rot_decrypt('Zneiva Zvafxl')
p rot_decrypt('Lhxvuveb Zngfhzbgb')
p rot_decrypt('Unllvz Fybavzfxv')
p rot_decrypt('Tregehqr Oynapu')