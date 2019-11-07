

import java.awt.Image;
import java.awt.Toolkit;
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author tinot
 */
public class Interfaz extends javax.swing.JFrame {

    /**
     * Creates new form Interfaz
     */
    public Interfaz() {
        initComponents();
        this.setLocationRelativeTo(null);
    }
    public Image getIconImage() {
        Image retValue = Toolkit.getDefaultToolkit().getImage(ClassLoader.getSystemResource("imagenes/logoE1.png"));
        return retValue;
    }
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        buttonGroupSeleccionados = new javax.swing.ButtonGroup();
        jButtonBuscar = new javax.swing.JButton();
        jButtonSalir = new javax.swing.JButton();
        jLabelTitulo = new javax.swing.JLabel();
        jLabelSelecciona = new javax.swing.JLabel();
        jTextFieldBusqueda = new javax.swing.JTextField();
        jButtonReset = new javax.swing.JButton();
        jRadioButtonDistrito = new javax.swing.JRadioButton();
        jRadioButtonEquipamiento = new javax.swing.JRadioButton();
        jRadioButtonLocalidad = new javax.swing.JRadioButton();
        jRadioButtonBarrio = new javax.swing.JRadioButton();
        jRadioButtonCodigoPostal = new javax.swing.JRadioButton();
        jRadioButtonProvincia = new javax.swing.JRadioButton();
        jRadioButtonCalle = new javax.swing.JRadioButton();
        jRadioButtonDiponibilidad = new javax.swing.JRadioButton();
        jRadioButtonTransporte = new javax.swing.JRadioButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setUndecorated(true);
        getContentPane().setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jButtonBuscar.setBackground(new java.awt.Color(0, 204, 204));
        jButtonBuscar.setText("Buscar");
        jButtonBuscar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonBuscarActionPerformed(evt);
            }
        });
        getContentPane().add(jButtonBuscar, new org.netbeans.lib.awtextra.AbsoluteConstraints(420, 100, 90, 40));

        jButtonSalir.setBackground(new java.awt.Color(255, 0, 0));
        jButtonSalir.setText("Salir");
        jButtonSalir.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonSalirActionPerformed(evt);
            }
        });
        getContentPane().add(jButtonSalir, new org.netbeans.lib.awtextra.AbsoluteConstraints(0, 510, 90, 40));

        jLabelTitulo.setFont(new java.awt.Font("Stencil", 3, 36)); // NOI18N
        jLabelTitulo.setText("Sport Facilities ");
        getContentPane().add(jLabelTitulo, new org.netbeans.lib.awtextra.AbsoluteConstraints(180, 20, 340, 60));

        jLabelSelecciona.setFont(new java.awt.Font("Sylfaen", 0, 18)); // NOI18N
        jLabelSelecciona.setText("Por favor seleccione una opcion:");
        getContentPane().add(jLabelSelecciona, new org.netbeans.lib.awtextra.AbsoluteConstraints(20, 160, 270, 30));

        jTextFieldBusqueda.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextFieldBusquedaActionPerformed(evt);
            }
        });
        getContentPane().add(jTextFieldBusqueda, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 100, 360, 40));

        jButtonReset.setBackground(new java.awt.Color(0, 204, 204));
        jButtonReset.setText("Resetear Busqueda");
        jButtonReset.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButtonResetActionPerformed(evt);
            }
        });
        getContentPane().add(jButtonReset, new org.netbeans.lib.awtextra.AbsoluteConstraints(440, 510, 150, 40));

        jRadioButtonDistrito.setText("Distrito");
        jRadioButtonDistrito.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jRadioButtonDistritoActionPerformed(evt);
            }
        });
        getContentPane().add(jRadioButtonDistrito, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 190, 130, 30));

        jRadioButtonEquipamiento.setText("Equipamiento");
        getContentPane().add(jRadioButtonEquipamiento, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 230, -1, -1));

        jRadioButtonLocalidad.setText("Localidad");
        getContentPane().add(jRadioButtonLocalidad, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 260, -1, -1));

        jRadioButtonBarrio.setText("Barrio");
        getContentPane().add(jRadioButtonBarrio, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 290, -1, -1));

        jRadioButtonCodigoPostal.setText("Codigo Postal");
        jRadioButtonCodigoPostal.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jRadioButtonCodigoPostalActionPerformed(evt);
            }
        });
        getContentPane().add(jRadioButtonCodigoPostal, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 320, -1, -1));

        jRadioButtonProvincia.setText("Provincia");
        getContentPane().add(jRadioButtonProvincia, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 350, -1, -1));

        jRadioButtonCalle.setText("Calle");
        getContentPane().add(jRadioButtonCalle, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 380, -1, -1));

        jRadioButtonDiponibilidad.setText("Disponibilidad");
        getContentPane().add(jRadioButtonDiponibilidad, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 220, -1, -1));

        jRadioButtonTransporte.setText("Transporte");
        getContentPane().add(jRadioButtonTransporte, new org.netbeans.lib.awtextra.AbsoluteConstraints(390, 260, -1, -1));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jButtonSalirActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonSalirActionPerformed
        System.exit(0);
    }//GEN-LAST:event_jButtonSalirActionPerformed

    private void jTextFieldBusquedaActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextFieldBusquedaActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextFieldBusquedaActionPerformed

    private void jButtonBuscarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonBuscarActionPerformed
			
        Resultado res = new Resultado();
        res.valorBusqueda=jTextFieldBusqueda.getText();
        
        if(jRadioButtonProvincia.isSelected()){
            res.campoSeleccionado="Provincia";
        }
        else if(jRadioButtonBarrio.isSelected()){
            res.campoSeleccionado="Barrio";
        }
        else if(jRadioButtonCalle.isSelected()){
            res.campoSeleccionado="Calle";
        }
        else if(jRadioButtonCodigoPostal.isSelected()){
             res.campoSeleccionado="Código Postal";
        }
        else if(jRadioButtonDiponibilidad.isSelected()){
             res.campoSeleccionado="Disponibilidad";
        }
        else if(jRadioButtonDistrito.isSelected()){
            res.campoSeleccionado="Distrito";
        }
        else if (jRadioButtonEquipamiento.isSelected()){
            res.campoSeleccionado="Equipamiento";
        }
        else if(jRadioButtonLocalidad.isSelected()){
            res.campoSeleccionado="Localidad";
        }
        else if(jRadioButtonTransporte.isSelected()){
            res.campoSeleccionado="Transporte";
        }
        this.dispose();
        res.setVisible(true);
       
    }//GEN-LAST:event_jButtonBuscarActionPerformed

    private void jButtonResetActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButtonResetActionPerformed
       
        this.jTextFieldBusqueda.setText("");
        this.jRadioButtonBarrio.setSelected(false);
        this.jRadioButtonCalle.setSelected(false);
        this.jRadioButtonCodigoPostal.setSelected(false);
        this.jRadioButtonDiponibilidad.setSelected(false);
        this.jRadioButtonDistrito.setSelected(false);
        this.jRadioButtonEquipamiento.setSelected(false);
        this.jRadioButtonLocalidad.setSelected(false);
        this.jRadioButtonProvincia.setSelected(false);
        this.jRadioButtonTransporte.setSelected(false);
       
    }//GEN-LAST:event_jButtonResetActionPerformed

    private void jRadioButtonDistritoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jRadioButtonDistritoActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jRadioButtonDistritoActionPerformed

    private void jRadioButtonCodigoPostalActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jRadioButtonCodigoPostalActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jRadioButtonCodigoPostalActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Interfaz.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Interfaz.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Interfaz.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Interfaz.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Interfaz().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.ButtonGroup buttonGroupSeleccionados;
    private javax.swing.JButton jButtonBuscar;
    private javax.swing.JButton jButtonReset;
    private javax.swing.JButton jButtonSalir;
    private javax.swing.JLabel jLabelSelecciona;
    private javax.swing.JLabel jLabelTitulo;
    private javax.swing.JRadioButton jRadioButtonBarrio;
    private javax.swing.JRadioButton jRadioButtonCalle;
    private javax.swing.JRadioButton jRadioButtonCodigoPostal;
    private javax.swing.JRadioButton jRadioButtonDiponibilidad;
    private javax.swing.JRadioButton jRadioButtonDistrito;
    private javax.swing.JRadioButton jRadioButtonEquipamiento;
    private javax.swing.JRadioButton jRadioButtonLocalidad;
    private javax.swing.JRadioButton jRadioButtonProvincia;
    private javax.swing.JRadioButton jRadioButtonTransporte;
    private javax.swing.JTextField jTextFieldBusqueda;
    // End of variables declaration//GEN-END:variables
}