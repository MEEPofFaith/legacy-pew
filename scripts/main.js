if(!Vars.headless){
  Events.on(ClientLoadEvent, () => {
    Core.app.post(() => {
      Vars.content.units().each(u => {
        if(u.minfo.mod === null){
          u.weapons.each(w => {
            if(w.shootSound == Sounds.pew || w.shootSound == Sounds.lasershoot) w.shootSound = Sounds.pew_;
          });
        }
      });
    
      const meta = Vars.mods.locateMod("legacy-pew").meta;
      meta.author = "[#FCC21B]MEEP of Faith";
    });
  });
}