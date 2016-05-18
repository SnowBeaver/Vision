# volume oil calculator in ml

"""
Private Sub NbContenantExpedies()
'Attention.  Si cette Sub est modifier, effectuer aussi les changements dans la procedure CalculerNbrContenant

On Error GoTo PROC_ERR

Dim QuantiteMLser As Integer
Dim QuantiteMLpot As Integer
Dim QuantiteMLfiole As Integer

QuantiteMLser = 0
QuantiteMLpot = 0
QuantiteMLfiole = 0

txtQteSer.Text = 0
txtQtePot.Text = 0
txtQteFiole.Text = 0

'SERINGUES
If chkGD.Item(0).value = 1 Then
    QuantiteMLser = QuantiteMLser + 15
End If

If chkEauSer.Item(0).value = 1 Then
    QuantiteMLser = QuantiteMLser + 10
End If

If chkFurSer.Item(0).value = 1 Then
    QuantiteMLser = QuantiteMLser + 20
End If

If chkBPCSer.Item(0).value = 1 Then
    QuantiteMLser = QuantiteMLser + 5
End If

txtQteSer.Text = IIf((CInt(QuantiteMLser / 30)) <> QuantiteMLser / 30, CStr(Int(QuantiteMLser / 30) + 1), CStr(CInt(QuantiteMLser / 30)))

If QuantiteMLser = 0 Then
    If chkDBPCSer.Item(0).value = 1 Then
        txtQteSer.Text = "1"
    Else
        txtQteSer.Text = "0"
    End If
End If


'POTS
If chkD1816_1.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 500
End If

If chkD1816_2.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 500
End If

If ChkD877.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 450
End If

If ChkCEI156.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 500
End If

If ChkTI.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 25
End If

If ChkFP25.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 100
End If

If ChkFP100.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 100
End If

If chkPourPoint.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 50
End If
If chkViscosity.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 50
End If
If chkCorrosif.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 200
End If

If chkBPCPot.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 5
End If

If ChkParticules.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 500
End If

If chkMDH.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 50
End If

If chkEauPot.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 10
End If
If chkFurPot.Item(0).value = 1 Then
    QuantiteMLpot = QuantiteMLpot + 20
End If

txtQtePot.Text = IIf((CInt(QuantiteMLpot / 750)) <> QuantiteMLpot / 750, CStr(Int(QuantiteMLpot / 750) + 1), CStr(CInt(QuantiteMLpot / 750)))

If QuantiteMLpot = 0 Then
    If ChkAcidite.Item(0).value = 1 _
        Or ChkCouleur.Item(0).value = 1 _
        Or ChkDensite.Item(0).value = 1 _
        Or ChkVisuel.Item(0).value = 1 _
        Or chkDBPCPot.Item(0).value = 1 Then
        txtQtePot.Text = "1"
    Else
        txtQtePot.Text = "0"
    End If
End If


'FIOLES
If chkBPCFiole.Item(0).value = 1 Then
    QuantiteMLfiole = QuantiteMLfiole + 5
End If

txtQteFiole.Text = IIf((CInt(QuantiteMLfiole / 5)) <> QuantiteMLfiole / 5, CStr(Int(QuantiteMLfiole / 5) + 1), CStr(CInt(QuantiteMLfiole / 5)))

If QuantiteMLfiole = 0 Then
    If chkDBPCFiole.Item(0).value = 1 Then
        txtQteFiole.Text = "1"
    Else
        txtQteFiole.Text = "0"
    End If
End If

'SERT A INDIQUER A L'USAGER QU'IL Y A DES TESTS DE SELECTIONNÉS
Dim testcheckedtemp As Integer

If chkPourPoint.Item(0).value = 1 _
Or chkViscosity.Item(0).value = 1 _
Or chkCorrosif.Item(0).value = 1 Then
    testcheckedtemp = 1
Else
    testcheckedtemp = 0
End If

If chkGD.Item(0).value = 1 _
Or chkEauSer.Item(0).value = 1 _
Or chkFurSer.Item(0).value = 1 _
Or chkDBPCSer.Item(0).value = 1 _
Or chkBPCSer.Item(0).value = 1 _
Or chkD1816_1.Item(0).value = 1 _
Or chkD1816_2.Item(0).value = 1 _
Or ChkD877.Item(0).value = 1 _
Or ChkCEI156.Item(0).value = 1 _
Or ChkTI.Item(0).value = 1 _
Or ChkFP25.Item(0).value = 1 _
Or ChkFP100.Item(0).value = 1 _
Or chkBPCPot.Item(0).value = 1 _
Or ChkParticules.Item(0).value = 1 _
Or chkMDH.Item(0).value = 1 _
Or chkEauPot.Item(0).value = 1 _
Or chkFurPot.Item(0).value = 1 _
Or ChkAcidite.Item(0).value = 1 _
Or ChkCouleur.Item(0).value = 1 _
Or testcheckedtemp = 1 _
Or ChkDensite.Item(0).value = 1 _
Or ChkVisuel.Item(0).value = 1 _
Or chkDBPCPot.Item(0).value = 1 _
Or chkBPCFiole.Item(0).value = 1 _
Or chkDBPCFiole.Item(0).value = 1 Then
    SSTab1.TabCaption(2) = "**  " & LoadResString(Langue + 4401) & "  **"       ' **  Fluide  **
Else
    SSTab1.TabCaption(2) = LoadResString(Langue + 4401) 'Fluide
End If


Exit Sub
PROC_ERR:
Call MsgErreurDesc("frmCreate", "NbContenantExpedies", Err.Number, Err.Description)

End Sub
"""
